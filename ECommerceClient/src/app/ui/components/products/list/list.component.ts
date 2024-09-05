import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../../../../services/common/models/file.service';
import { ProductService } from '../../../../services/common/models/product.service';
import { ListProduct } from 'src/app/contracts/listProduct';
import { BaseUrl } from 'src/app/contracts/baseUrl';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private fileService: FileService) { }

  currentPageNo: number;
  totalCount: number;
  totalPageCount: number;
  pageSize: number = 12;
  pageList: number[] = [];
  baseUrl: BaseUrl;

  products: ListProduct[];
  async ngOnInit() {

    this.baseUrl = await this.fileService.getBaseStorageUrl();

    this.activatedRoute.params.subscribe(async params => {
      this.currentPageNo = parseInt(params["pageNo"] ?? 1);

      const data: { totalCount: number, products: ListProduct[] } = await this.productService.read(this.currentPageNo - 1, this.pageSize,
        () => {

        },
        errorMessage => {

        });

      this.products = data.products;

      this.products = this.products.map<ListProduct>(p => {
        const listProduct: ListProduct = {
          id: p.id,
          createdDate: p.createdDate,
          imagePath: p.productImageFiles.length ? p.productImageFiles.find(p => p.showcase).path : "",
          name: p.name,
          price: p.price,
          stock: p.stock,
          updatedDate: p.updatedDate,
          productImageFiles: p.productImageFiles
        };

        return listProduct;
      });

      this.totalCount = data.totalCount;
      this.totalPageCount = Math.ceil(this.totalCount / this.pageSize);

      this.pageList = [];

      if (this.currentPageNo - 3 <= 0)
        if(this.totalPageCount<7)
          for (let i = 1; i <= this.totalPageCount; i++)
            this.pageList.push(i);
        else
          for (let i = 1; i <= 7; i++)
            this.pageList.push(i);

      else if (this.currentPageNo + 3 >= this.totalPageCount)
        if((this.totalPageCount - 6) <= 0)
          for (let i = 1; i <= this.totalPageCount; i++)
            this.pageList.push(i);
        else
          for (let i = this.totalPageCount - 6; i <= this.totalPageCount; i++)
            this.pageList.push(i);

      else
        for (let i = this.currentPageNo - 3; i <= this.currentPageNo + 3; i++)
          this.pageList.push(i);
    });
  }
}
