import React from 'react';
      import { MDBGallery, MDBGalleryList} from 'mdbreact';

      function SalonGallery() {
        const dataImg = [
          {
            img:
              'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg',
            cols: 1,
            title: 'image',
          },
          {
            img:
              'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg',
            cols: 2,
            title: 'image',
          },
          {
            img:
              'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).jpg',
            cols: 1,
            title: 'image',
          },
          {
            img:
              'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg',
            cols: 2,
            title: 'image',
          },
          {
            img:
              'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg',
            cols: 2,
            title: 'image',
          },

          {
            img:
              'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg',
            cols: 1,
            title: 'image',
          },
          {
            img:
              'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg',
            cols: 2,
            title: 'image',
          },
          {
            img:
              'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg',
            cols: 1,
            title: 'image',
          }
        ];

        return (
          <MDBGallery cols={4}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList
                  key={i}
                  cols={cols || 1}
                  titleClasses='rounded'
                  styles={{ boxShadow: '0 0 3px rgba(0,0,0, .3)' }}
                >
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        );
      }

      export default SalonGallery;