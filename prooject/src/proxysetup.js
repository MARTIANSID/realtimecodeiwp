const proxy=require("http-proxy-middleware")

module.exports=function(app){
    app.use(
        proxy("/v1/execute",{
            target:"https://api.jdoodle.com",
            changeOrigin:true
        })
    )
}