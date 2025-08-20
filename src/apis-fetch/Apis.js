// *****************Article******************
export const API_Articles = {
    BLOGS: (page = 1, itemsPerPage = 50) =>
        `https://tamkeen-dev.com/api/blogs-api?items_per_page=${itemsPerPage}&page=${page}`,
};

// *****************Article Details******************
export const URL_Details = 'https://tamkeen-dev.com/api';

export const API_Details = (id) => {
    if (!id) throw new Error("ID is required");
    return `${URL_Details}/node/${ id }?_format=json`;
};

// ******************FaqList*****************
export const API_FaqList = 'https://tamkeen-dev.com/api/faq-list';

// ******************Testimonials*****************
export const API_Testimonials = 'https://tamkeen-dev.com/api/testimonials';
// ****************my Article*******************
export const API_UserBlogs = 'https://tamkeen-dev.com/api/blogs-api-current-user';
export const API_Tags = "https://tamkeen-dev.com/api/terms/tags";
export const API_SingleImage = 'https://tamkeen-dev.com/api/file/upload/node/blog/field_image?_format=json';
export const API_GalleryImages = 'https://tamkeen-dev.com/api/file/upload/node/blog/field_gallery?_format=json';
export const API_createArticle = 'https://tamkeen-dev.com/api/node?_format=json';
export const API_UpdateArticle = (id) =>
    `https://tamkeen-dev.com/api/node/${id}?_format=json`;
export const API_deleteArticle = (id) =>

    `https://tamkeen-dev.com/api/node/${id}?_format=json`;

// ****************Users*******************
export const API_Users = "https://tamkeen-dev.com/api/users-list?_format=json";
export const API_deleteUser = (uid) =>

    `https://tamkeen-dev.com/api/user/${uid}?_format=json`;

// *****************MyAccount******************
export const API_MyAccount = "https://tamkeen-dev.com/api/user/71?_format=json";
export const API_Change_user = "https://tamkeen-dev.com/api/user/71?_format=json";
export const API_img_user = 'https://tamkeen-dev.com/api/file/upload/user/user/user_picture?_format=json';

// *****************Signin******************
export const API_Signin = 'https://tamkeen-dev.com/api/user/login?_format=json';
// *****************Signin******************
export const API_Signup = "https://tamkeen-dev.com/api/user/registerpass?_format=json";
// *****************************************