let wasOffline = false;
        let activeNotification = null;

        function showNotification(notificationElement) {
            if (activeNotification) {
                activeNotification.classList.remove('show-notification');
                activeNotification.classList.add('hide-notification');
                
                activeNotification.addEventListener('animationend', () => {
                    activeNotification.classList.remove('hide-notification');
                }, {once: true});
            }

            notificationElement.classList.add('show-notification');
            notificationElement.style.opacity = '1';
            activeNotification = notificationElement;

            setTimeout(() => {
                notificationElement.classList.remove('show-notification');
                notificationElement.classList.add('hide-notification');
                
                notificationElement.addEventListener('animationend', () => {
                    notificationElement.classList.remove('hide-notification');
                    activeNotification = null;
                }, {once: true});
            }, 3000);
        }

        // Initial check
        if (!navigator.onLine) {
            showNotification(document.querySelector('.offline-notification'));
            wasOffline = true;
        }

        window.addEventListener('offline', () => {
            const offlineNotification = document.querySelector('.offline-notification');
            showNotification(offlineNotification);
            wasOffline = true;
        });

        window.addEventListener('online', () => {
            if (wasOffline) {
                const onlineNotification = document.querySelector('.online-notification');
                showNotification(onlineNotification);
                wasOffline = false;
            }
        });