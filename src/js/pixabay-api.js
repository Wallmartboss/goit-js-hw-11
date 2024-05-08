//Your API key: 43769580-78f5aea5f54664bb89b2b40f7
// sample  https://pixabay.com/api/?key=43769580-78f5aea5f54664bb89b2b40f7&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true

// const images = [
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//     description: 'Aerial Beach View',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//     description: 'Flower Blooms',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine Mountains',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//     description: 'Mountain Lake Sailing',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     description: 'Alpine Spring Meadows',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     description: 'Nature Landscape',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     description: 'Lighthouse Coast Sea',
//   },
// ];

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export let images;
fetch("https://pixabay.com/api/?key=43769580-78f5aea5f54664bb89b2b40f7&q=sharks&image_type=photo&orientation=horizontal&safesearch=true")

  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Обрабатываем полученные данные
    console.log(data);
       // Пример обработки данных: вывод первой картинки из результатов
    if (data.hits.length > 0) {
      images = [];
      for (let i = 0; i < data.hits.length; i++) {
        // images.push(data.hits[i]);
       
        let pic = {};
        pic.url = data.hits[i].webformatURL;
        pic.largeUrl = data.hits[i].largeImageURL;
        pic.tags = data.hits[i].tags;
        pic.likes = data.hits[i].likes;
        pic.views = data.hits[i].views;
        pic.comments = data.hits[i].comments;
        pic.downloads = data.hits[i].downloads;
        images.push(pic);
      }
      console.log(images);
      // export images;
          // const imageUrl = data.hits[0].webformatURL;
      // console.log(imageUrl);
      // Здесь вы можете использовать imageUrl, например, установить его как источник изображения для HTML элемента
    } else {
            iziToast.error({
            title: 'Error',
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: 'topRight',
           });;
    }
  })
  .catch(error => {
    console.error('Виникла помилка ', error);
  });
  
    