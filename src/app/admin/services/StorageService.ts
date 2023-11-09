import { createClient } from '@supabase/supabase-js'
import {Injectable} from "@angular/core";
import {environment} from "../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly supabase = createClient(environment.PROJECT_URL, environment.API_KEY)

  async uploadFile  (file: File)  {
    const { data, error } = await this.supabase
      .storage.from('saboroso-burger-files')
      .upload(file.name, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      console.error("Houve um erro durante o upload.", error)
      return false
    } else {
      console.info("Imagem upada com sucesso.")
      return true
    }
  }
}
