const base = {
    get() {
        return {
            url : "http://localhost:8080/wuliupeishong/",
            name: "wuliupeishong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wuliupeishong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "物流配送管理系统"
        } 
    }
}
export default base
