import 'setimmediate';
import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';
import { fetch } from 'whatwg-fetch';

cloudinary.config({
  cloud_name: 'dpaqvgqd7',
  api_key: '265395568863549',
  api_secret: '4OfB03G3MgwnTL0M3u52aZolME4',
  secure: true,
});

describe('Pruebas en fileUpload', () => {
  test('Debe de subir el archivo correctamente a cloudinary', async () => {
    const imageUrl =
      'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png';
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'photo.jpg');
    const url = await fileUpload(file);
    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');
    const respCloud = await cloudinary.api.delete_resources(
      ['journal/' + imageId],
      {
        resource_type: 'image',
      }
    );
  });

  test('Debe de retornar null', async () => {
    const file = new File([], 'photo.jpg');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
