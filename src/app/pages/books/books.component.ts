import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = [];
  displayedColumns = ['_id', 'bookName', 'type', 'author', 'status'];

  constructor(private bookService: BookService, private spinner: NgxSpinnerService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.spinner.show();
    this.bookService.getAllBooks().subscribe(result => {
      this.spinner.hide();
      this.books = result.data;
    }, err => {
      this.spinner.hide();
      this.snackbar.open('Error occured while fetching books.', 'Close', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000
      });
    });
  }

}
