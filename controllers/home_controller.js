module.exports.home = function(req,res){
   // return res.end('<h1> express is up for codieal!</h1>')
   return res.render('home', {
      title:"Home"
   });
}

