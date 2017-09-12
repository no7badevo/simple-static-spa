const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const Link = ReactRouterDOM.Link;
    

class Home extends React.Component{
        
        handleClick(e) {

var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var modal = document.getElementById('myModal');
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
    console.log('Hello');
}
    };
        render() {
            return <div className="wrapper">
  <div className="logo"></div>
  <header className="header-bg"></header>
   <div className="page">
       <nav id="burger">
           <ul className="menu">
               <li><Link to="/" className="link"><span>Главная</span></Link></li>
               <li><Link to="/education"><span>Учеба</span></Link></li>
               <li><Link to="/career"><span>Карьера</span></Link></li>
               <li><Link to="/contacts"><span>Контакты</span></Link></li>
           </ul>
       </nav>
      
       <div className="main-content">
          
           <div className="info flex-item">
               <div className="me">Нурдинов</div>
               <div className="me">Баатыр</div>
               <div className="me">Нурдинович</div>
           </div>
           
           <div className="skills flex-item">
               <label htmlFor="first-skill"><input type="checkbox" name="" id="first-skill" className="name" /></label>
               <label htmlFor="second-skill"><input type="checkbox" name="" id="second-skill" className="name" /></label>
               <label htmlFor="third-skill"><input type="checkbox" name="" id="third-skill" className="name" /></label>
               <label htmlFor="fourth-skill"><input type="checkbox" name="" id="fourth-skill" className="name" /></label>
               <label htmlFor="fifth-skill"><input type="checkbox" name="" id="fifth-skill" className="name" /></label>
           </div>
           
           <div className="about-me flex-item">
              <div className="topic">
                   <h2 className="title">Немного о себе</h2>
                   <p className="description">Всем привет. Меня зовут Баатыр и мне 22 года. Я начинающий веб разработчик.<br />Я киноман и геймер. <br />
                       Любимая игра - Дота, любимый фильм - Гладиатор. <br />
                       В будущем планирую стать полноценным фулстек разработчиком, <br /> у меня есть желание профессианально освоить веб дизайн и бэкенд разработку.</p>
                </div>
           </div>
           
           <div className="flex-item">
              <img id="myImg" src="img/avatar2.jpg" onClick={this.handleClick} alt="Hello! Here I'am" />      
                <div id="myModal" className="modal">
                  <span className="close">&times;</span>
                  <img className="modal-content" id="img01" />
                  <div id="caption"></div>
                </div>
           </div>
           
       </div>
   </div>
       <footer className="footer">
          <div className="footer-wrapper">
               <div className="contacts">
                   <h3><b>Контакты:</b></h3>
                   <p>+996 555 050505</p>
                   <p>your_email@gmail.com</p>
                   <p>г.Бишкек, ул.Строителей 37</p>
               </div>
               <div className="social">
                      <h3><b>Мы в социальных сетях:</b></h3>
                        <div className="social-block">
                           <div className="social-icons"></div>
                           <div className="social-icons"></div>
                           <div className="social-icons"></div>
                        </div>
                   </div>
            </div>
       </footer>
</div>;
        }
    }
    class Education extends React.Component{
        render(){
            return <div className="wrapper">
  <div className="logo"></div>
  <header className="header-bg"></header>
   <div className="page">
       <nav id="burger">
           <ul className="menu">
               <li><Link to="/" className="link"><span>Главная</span></Link></li>
               <li><Link to="/education"><span>Учеба</span></Link></li>
               <li><Link to="/career"><span>Карьера</span></Link></li>
               <li><Link to="/contacts"><span>Контакты</span></Link></li>
           </ul>
       </nav>
      
           <h2 className="education-title">Образование</h2>
       <div className="education-content">
           <div className="info flex-item">
               <div className="me education">2002 - 2011гг, УВК шг№12.</div>
               <div className="me education">2011 - 2013гг, лицей при КГУСТА.</div>
               <div className="me education">2014 - 2016гг, военный факультет при КГУСТА.</div>
               <div className="me education">2013 - 2017гг, КГУСТА им. Н.Исанова, ФИТ, бакалавр.</div>
               <div className="me education">2017г, магистратура Информационные системы и технологии.</div>
           </div>
           
           
       </div>
   </div>
       <footer className="footer">
          <div className="footer-wrapper">
               <div className="contacts">
                   <h3><b>Контакты:</b></h3>
                   <p>+996 555 050505</p>
                   <p>your_email@gmail.com</p>
                   <p>г.Бишкек, ул.Строителей 37</p>
               </div>
               <div className="social">
                      <h3><b>Мы в социальных сетях:</b></h3>
                        <div className="social-block">
                           <div className="social-icons"></div>
                           <div className="social-icons"></div>
                           <div className="social-icons"></div>
                        </div>
                   </div>
            </div>
       </footer>
</div>;
        }
    }
    class Career extends React.Component{
        render(){
        return    <div className="wrapper">
  <div className="logo"></div>
  <header className="header-bg"></header>
   <div className="page">
       <nav id="burger">
           <ul className="menu">
               <li><Link to="/" className="link"><span>Главная</span></Link></li>
               <li><Link to="/education"><span>Учеба</span></Link></li>
               <li><Link to="/career"><span>Карьера</span></Link></li>
               <li><Link to="/contacts"><span>Контакты</span></Link></li>
           </ul>
       </nav>
      
       <h2 className="career-title">Карьера</h2>
       <div className="career-content">
           <div className="info flex-item">
               <div className="me education career-icon">HTML-верстальщик, ОсОО PutInByte
               <br />04.06.2016 - 02.08.2016 </div>
           </div>
           
           
       </div>
   </div>
       <footer className="footer">
          <div className="footer-wrapper">
               <div className="contacts">
                   <h3><b>Контакты:</b></h3>
                   <p>+996 555 050505</p>
                   <p>your_email@gmail.com</p>
                   <p>г.Бишкек, ул.Строителей 37</p>
               </div>
               <div className="social">
                      <h3><b>Мы в социальных сетях:</b></h3>
                        <div className="social-block">
                           <div className="social-icons"></div>
                           <div className="social-icons"></div>
                           <div className="social-icons"></div>
                        </div>
                   </div>
            </div>
       </footer>
</div>;
        }
    }
    class Contacts extends React.Component{
        render(){
            return <div className="wrapper">
  <div className="logo"></div>
  <header className="header-bg"></header>
   <div className="page">
       <nav id="burger">
           <ul className="menu">
               <li><Link to="/" className="link"><span>Главная</span></Link></li>
               <li><Link to="/education"><span>Учеба</span></Link></li>
               <li><Link to="/career"><span>Карьера</span></Link></li>
               <li><Link to="/contacts"><span>Контакты</span></Link></li>
           </ul>
       </nav>
      
       <h2 className="contacts-title">Контакты</h2>
       <div className="career-content">
           <div className="info flex-item">
               <div className="me education sprite-icon">+996 703 944 703</div>
               <div className="me education sprite-icon">no7badevo@gmail.com</div>
               <div className="me education sprite-icon">г.Бишкек, ул.Медерова 8/1</div>
           </div>
           
       </div>
               
   </div>
       <footer className="footer">
          <div className="footer-wrapper">
               <div className="contacts">
                   <h3><b>Контакты:</b></h3>
                   <p>+996 555 050505</p>
                   <p>your_email@gmail.com</p>
                   <p>г.Бишкек, ул.Строителей 37</p>
               </div>
               <div className="social">
                      <h3><b>Мы в социальных сетях:</b></h3>
                        <div className="social-block">
                           <div className="social-icons"></div>
                           <div className="social-icons"></div>
                           <div className="social-icons"></div>
                        </div>
                   </div>
            </div>
       </footer>
</div>;
        } 
    }


    ReactDOM.render(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/education" component={Education} />
                    <Route path="/career" component={Career} />
                    <Route path="/contacts" component={Contacts} />
                </Switch>
            </div>
        </Router>,
        document.getElementById("app")
    )