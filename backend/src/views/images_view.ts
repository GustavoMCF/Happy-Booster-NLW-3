import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `${process.env.URL_IMAGE2}${image.path}`,
        };
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};