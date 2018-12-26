export const domain='http://localhost:8080';//本地的

export default{
    //账号管理
    login: '//homework_manage/user/login',          //登录
    faceLoginL:'/homework_manage/user/face/login',  //人脸登录
    register:'/homework_manage/user/register',      //注册
    detail:'/homework_manage/user/detail',          //用户信息
    updateSet:'/homework_manage/user/set',          //用户修改

    //学习
    study:'/homework_manage/study_data/list',       //学习资料列表

    //班级
    tclass:'/homework_manage/grade/create',              //创建班级
    publishWork:'/homework_manage/homework/add',         //发布作业
    HomeworkList:'/homework_manage/homework/list',       //作业列表
    uploadHomework:'/homework_manage/homework/answer',   //上传作业
    stuWork:'/homework_manage/homework/answer/answer/list', //学生上传作业列表
     
    //社区
    dynamic:'/homework_manage/blog/list',            //动态列表
    dynamicDetails:'/homework_manage/blog/detail',   //动态详情
    puslishDetails:'/homework_manage/blog/add',      //发表动态
    transpond:'/homework_manage/blog/transpond',     //转发动态
    praise:'/homework_manage/blog/praise',           //点赞
    
    //评论
    commentList:'/homework_manage/comment/list',     //评论动态列表
    commentC:'/homework_manage/comment/add',         //发表评论
    conmmentP:'/homework_manage/comment/praise',     //点赞评论
}