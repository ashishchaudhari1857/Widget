export class Widget {
    constructor({position='bottom-right'}={}) {
        this.position=this.getPosition(position);
        this.open=false;
        this.initialise();
    }
    getPosition(position){
        const [vertical ,horizontal]=position.split('-');
            return{
                [vertical]:'30px',
                [horizontal]:'30px'
            }
    }

    initialise(){
        const container =document.createElement('div')
        // const containerElement =document.createElement('div')
        container.style.position='fixed';
        Object.keys(this.position).forEach((key)=>container.style[key]=this.position[key])
        document.body.appendChild(container);
        const questionElement = document.createElement('div');
        questionElement.textContent = 'How likely are you to recommend us to a friend or colleague?';
        container.appendChild(questionElement);
        const scaleElement = document.createElement('div');

        for (let i = 0; i <= 10; i++) {
            const numberElement = document.createElement('button');
            numberElement.textContent = i;
            numberElement.style.backgroundColor = i === 0 ? '#ff6666' : i === 10 ? '#66cc66' : '#ffffff';
            scaleElement.appendChild(numberElement);
        }
        container.appendChild(scaleElement);
    }
  }
  