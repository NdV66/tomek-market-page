import { TAppErrors } from './types';

export const APP_ERRORS: TAppErrors = {
    GALLERY_IMAGES_SHOULD_BE_DIVIDED: new Error(
        '[Gallery translations] Gallery images should be divided by 2 and 3 at the same time.',
    ),
};
