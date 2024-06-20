(function () {
  class Widget {
    constructor({ position = "bottom-right" } = {}) {
      this.position = this.getPosition(position);
      this.open = true;
      this.initialise();
      this.createStyle();
    }

    getPosition(position) {
      const [vertical, horizontal] = position.split("-");
      return {
        [vertical]: "30px",
        [horizontal]: "30px",
      };
    }

    initialise() {
      const container = document.createElement("div");
      container.style.position = "fixed";
      Object.keys(this.position).forEach(
        (key) => (container.style[key] = this.position[key])
      );
      document.body.appendChild(container);

       this.contenContainer = document.createElement('div');
      container.appendChild(this.contenContainer)
      this.contenContainer.classList.add("widget-container");
      
      const questionElement = document.createElement("div");
      questionElement.textContent = "How likely are you to recommend us to a friend or colleague?";
      this.contenContainer.appendChild(questionElement);

      questionElement.classList.add("question-text");

      const scaleElement = document.createElement("div");
      for (let i = 0; i <= 10; i++) {
        const numberElement = document.createElement("button");
        numberElement.textContent = i;
        numberElement.style.backgroundColor =
          i === 0 ? "#ff6666" : i === 10 ? "#66cc66" : "#ffffff";
        scaleElement.appendChild(numberElement);
        numberElement.classList.add("rating-btn");
      }
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container')

     this.contenContainer.appendChild(scaleElement);

      const closeIcon=document.createElement('img');
      closeIcon.src='https://cdn.jsdelivr.net/gh/ashishchaudhari1857/Widget/imgs/images.png';
      this.closeIcon=closeIcon;
      closeIcon.classList.add('icon');

      const SueveyIcon=document.createElement('img');
      SueveyIcon.src='https://cdn.jsdelivr.net/gh/ashishchaudhari1857/Widget/imgs/survey.png';
      this.SueveyIcon=SueveyIcon;
      SueveyIcon.classList.add('icon', 'hidden');

      buttonContainer.appendChild(closeIcon);
      buttonContainer.appendChild(SueveyIcon);
      buttonContainer.addEventListener('click', this.toggleOpen.bind(this));
      container.appendChild(buttonContainer)

    }

    createStyle() {
      const styleElement = document.createElement("style");
      document.head.appendChild(styleElement);
      styleElement.innerHTML = `
      .widget-container {
        background-color: #f5f5f5;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 0 auto;
      }
      .question-text {
        font-size: 17px;
        font-weight: bold;
        color: #333;
        margin-bottom:12px;
      }
     .widget-container .rating-btn {
      display: inline-block;
      padding: 7px 14px;
      color: #555;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }
     .widget-container .rating-btn:hover {
      background-color: #d0d0d0;
    }
      .hidden{
      display:none;
      }

       
    `;
    
    }

    toggleOpen(){
      this.open=!this.open

      if(this.open){
        this.SueveyIcon.classList.add('hidden');
        this.closeIcon.classList.remove('hidden');
        this.contenContainer.classList.remove('hidden')

      }else{
        this.SueveyIcon.classList.remove('hidden');
        this.closeIcon.classList.add('hidden');
        this.contenContainer.classList.add('hidden')

      }
    }
  }

  // Attach the Widget class to the global window object
  window.Widget = Widget;
})();
