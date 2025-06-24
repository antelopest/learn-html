class UserCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        const firstName = this.getAttribute('firstName') || 'firstName';
        const lastName = this.getAttribute('lastName') || 'lastName';
        const job = this.getAttribute('job') || 'job';

        const style = `
            <style>
                .card {
                    margin: 15px;
                    display: inline-block;;
                    border: 1px solid #ccc;
                }
                h3 {
                    margin: 0;
                    padding: 5px 15px 5px 15px;
                    font-family: Arial, sans-serif;
                    font-size: 18px;
                    font-weight: 600;
                }
                p {
                    margin: 0;
                    padding: 5px 15px 5px 15px;
                    font-family: Arial, sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                }
            </style>
        `;

        const template = `
            <div class="card">
               <h3>${firstName} ${lastName}</h3>
                <p>${job}</p>
            </div>
        `;

        this.shadowRoot.innerHTML = `
            ${style}
            ${template}
        `;
    }
}

export default function () {
    customElements.define('user-card', UserCard);
}
