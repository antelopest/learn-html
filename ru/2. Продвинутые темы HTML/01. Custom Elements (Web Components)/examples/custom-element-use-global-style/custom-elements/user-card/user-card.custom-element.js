class UserCard extends HTMLElement {
    constructor() {
        super();

        const firstName = this.getAttribute('firstName') || 'firstName';
        const lastName = this.getAttribute('lastName') || 'lastName';
        const job = this.getAttribute('job') || 'job';

        const template = `
            <div class="card">
               <h3>User Card</h3>
               <p>${firstName} ${lastName}</p>
                <p>${job}</p>
            </div>
        `;

        this.innerHTML = `
            ${template}
        `;
    }
}

export default function () {
    customElements.define('user-card', UserCard);
}
