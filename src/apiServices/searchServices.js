import * as request from '~/utils/request';

export const search = async (q, type="less") => {
    try {
        const res = await request // request ở đây là 1 object với các phần tử là các method ta custom
            .get('users/search', {
                params: {
                    q,
                    type,
                },
            });
            return res.data;
    } catch (error) {
        console.log(error);
    }
};
