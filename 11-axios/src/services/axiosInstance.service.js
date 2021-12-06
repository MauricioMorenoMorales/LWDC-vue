import Axios from 'axios';

const axiosInstance = Axios.create({
	baseURL: `https://vue-completecourse.firebaseio.com`,
});

axiosInstance.defaults.headers.common['LeelaInstance'] =
	'Leela Instance Header';

export default axiosInstance;
