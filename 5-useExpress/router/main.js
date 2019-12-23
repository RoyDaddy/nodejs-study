module.exports = function(app, fs)
{
     app.get('/',function(req,res){
         res.render('login', {
             title: "MY HOMEPAGE",
             length: 5
         })
     });
}