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

      this.contentContainer = document.createElement("div");
      container.appendChild(this.contentContainer);
      const closeIcon = document.createElement("div");
      closeIcon.textContent = "X";
      closeIcon.classList.add("close-icon");
      this.contentContainer.appendChild(closeIcon);
      this.contentContainer.classList.add("widget-container");

      const questionElement = document.createElement("div");
      questionElement.textContent =
        "How likely are you to recommend us to a friend or colleague?";
      this.contentContainer.appendChild(questionElement);

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
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("button-container");

      this.contentContainer.appendChild(scaleElement);

      const surveyIcon = document.createElement("img");
      surveyIcon.src =
        "https://cdn.jsdelivr.net/gh/ashishchaudhari1857/Widget/imgs/survey.png";
      this.surveyIcon = surveyIcon;
      surveyIcon.classList.add("icon", "hidden");

      buttonContainer.appendChild(surveyIcon);
      buttonContainer.addEventListener("click", this.toggleOpen.bind(this));
      closeIcon.addEventListener("click", this.toggleOpen.bind(this));
      container.appendChild(buttonContainer);

      this.closeIcon = closeIcon; // Assigning closeIcon to this instance
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
          margin-bottom: 12px;
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
        .hidden {
          display: none;
        }
        .close-icon {
  padding: 0.5rem  !important;
  text-align: end !important;
  font-size: 1.2rem !important;
  margin-bottom: 1rem !important;
  cursor: pointer !important;
}
      `;
    }

    toggleOpen() {
      this.open = !this.open;

      if (this.open) {
        this.surveyIcon.classList.add("hidden");
        this.closeIcon.classList.remove("hidden");
        this.contentContainer.classList.remove("hidden");
      } else {
        this.surveyIcon.classList.remove("hidden");
        this.closeIcon.classList.add("hidden");
        this.contentContainer.classList.add("hidden");
      }
    }
  }

  window.Widget = Widget;
})();
