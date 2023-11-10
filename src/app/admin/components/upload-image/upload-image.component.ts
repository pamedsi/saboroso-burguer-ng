import {Component, EventEmitter, Output} from '@angular/core';
import {emit} from "process";
import {StorageService} from "../../services/StorageService";
import {environment} from "../../../../environment/environment";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  preview: any
  picUploaded = false
  @Output() onChosenPic = new EventEmitter<string>()

  constructor(private storageService: StorageService) {
  }

  async selectFile(event: any) {
    const file: File | null = event.target.files.item(0);

    if (file) {
      const imageSaved = await this.saveImage(file)
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.preview = e.target.result;

        if (imageSaved) this.onChosenPic.emit(`${environment.BASE_STORAGE_URL}/${file.name}`);
        else alert('Erro ao salvar imagem no banco de dados.')
      }

      reader.readAsDataURL(file)
    }

    this.picUploaded = true
  }

  async saveImage(pic: File){
    if (pic) return await this.storageService.uploadFile(pic)
    return false
  }

}
