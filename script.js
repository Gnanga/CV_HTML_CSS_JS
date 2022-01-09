const txtAnim = document.querySelector('h1');
new Typewriter(txtAnim,{
   deleteSpeed:20
})
.changeDelay(20)
.typeString('CV de !')
.pauseFor(300)
.typeString('<strong> Ndeye Gnanga MBAYE </strong> !')
.pauseFor(1000)
.deleteChars(29)
.typeString('CV de !')
.pauseFor(300)
.typeString('<strong> Ndeye Gnanga MBAYE </strong> !')
.pauseFor(1000)
.start()

