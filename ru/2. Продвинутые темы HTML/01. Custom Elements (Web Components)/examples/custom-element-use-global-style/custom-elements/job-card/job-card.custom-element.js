class JobCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        const job = this.getAttribute('job') || 'job';
        const experience = this.getAttribute('experience') || '0';

        const template = `
            <div class="card">
               <h3>Job Card</h3>
               <p>${job}</p>
               <p>${experience} years</p>
            </div>
        `;

        this.shadowRoot.innerHTML = `
            <style>
              .card {
                  border: 1px solid #ccc;
                  display: inline-block;
                  margin: 15px;
                  padding: 
              }
               h3 {
                    margin: 0;
                    padding: 5px 15px 5px 15px;
                    font-family: 'Roboto', sans-serif;
                    font-size: 18px;
                    font-weight: 600;
                }
                p {
                    margin: 0;
                    padding: 5px 15px 5px 15px;
                    font-family: 'Roboto', sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                }
            </style>
            ${template}
        `;
    }
}

export default function () {
    customElements.define('job-card', JobCard);
}