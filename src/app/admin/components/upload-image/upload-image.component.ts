import {Component, Output} from '@angular/core';
import {emit} from "process";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  preview: any
  picUploaded = false
  @Output() chosenPic: any

  selectFile(event: any) {
    const file: File | null = event.target.files.item(0);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.preview = e.target.result;
        this.chosenPic.emit(file)
      };

      reader.readAsDataURL(file);
    }

    this.picUploaded = true
  }

}
