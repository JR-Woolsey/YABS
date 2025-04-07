
        function rotateLabelSpan() {
            const radioButtons = document.querySelectorAll('input[name="accordion"]');
            
            radioButtons.forEach(radioButton => {
                radioButton.addEventListener('change', function() {
                    const labels = document.querySelectorAll('label span');
                    
                    labels.forEach(label => {
                        if (label.parentElement.getAttribute('for') === this.id) {
                            label.classList.toggle('rotate', this.checked);
                        } else {
                            label.classList.remove('rotate');
                        }
                    });
                });
            });
        }
        
        rotateLabelSpan();

    
        document.addEventListener("DOMContentLoaded", function() {
            function getParameterByName(name, url) {
                if(!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
                const results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return "";
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }
            
            const selectedDay = "day-" + getParameterByName("d");
            
            const radioBtn = document.getElementById(selectedDay);
            if (radioBtn) {
                radioBtn.checked = true;
                
                const label = document.querySelector(`label[for="${selectedDay}"]`);
                const span = label.querySelector("span");
                if (span) {
                    span.classList.add("rotate");
                }
            }
        });
