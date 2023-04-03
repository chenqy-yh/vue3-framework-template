import * as yup from 'yup'

yup.setLocale({
    mixed:{
        required:'${label}是必须的',

    },
    string:{
        email:'邮箱格式错误',
        min:'${label}不能小于${min}',
        max:'${label}不能大于${max}',
    },
    number:{
    }
})

export default yup