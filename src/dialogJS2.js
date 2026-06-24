export class Dialog2 {
    static copyright = 'Fernando Omar Luna';
    static version = '1.0.0';
    static icon = {
        SUCCESS: '✅',
        ERROR: '❌',
        WARNING: '⚠️',
        QUESTION: '❓',
        INFO: 'ℹ️'
    };

    static async Alert(title, message, icon = this.icon.INFO, okButtonText = 'Ok') {
        return new Promise((resolve) => {
            const dialogJS2 = document.createElement('dialog');
            dialogJS2.classList.add('dialog2');
            dialogJS2.innerHTML = `
                <div class="dialog2-header">
                    <div class="dialog2-icon">${icon || ''}</div>
                    <h2 class="dialog2-title">${title || ''}</h2>
                </div>
                <div class="dialog2-content">
                    <p class="dialog2-message">${message || ''}</p>
                </div>
                <div class="dialog2-footer">
                    <button class="dialog2-btn dialog2-btn-primary" data-dialog-btn="Ok">${okButtonText || 'Ok'}</button>
                </div>
            `;
            document.body.appendChild(dialogJS2);
            dialogJS2.showModal();
            dialogJS2.querySelector('button.dialog2-btn.dialog2-btn-primary')
                .addEventListener('click', (event) => {
                    resolve(event.target.dataset);
                    dialogJS2.close();
                    dialogJS2.remove();
                });
        });
    };
}