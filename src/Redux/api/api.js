import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "5583a7fb-3e8c-4d0c-924e-60b4f6780534"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const UsersAPI = {
    getUsers(selectedPage, pageSize) {
        return instance.get(`users?page=${selectedPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    }
}

export const ProfileAPI = {
    setUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getProfileStatus(userId){
        return instance.get(`profile/status/${userId}`)
        .then(response => {
            return response.data;
        })
    },
    updateProfileStatus(status){
        return instance.put('profile/status', {status: status});
    },
    savePhoto(photoFile){
        const formData = new FormData;
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData);
    }
}


export const AuthAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false, captcha = null){
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout(){
        return instance.delete('auth/login')
    }
}

export const Security = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}
