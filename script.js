document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');
    const buttons = Array.from(document.querySelectorAll('input[type="button"]'));

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.value;

            if (value === '=') {
                try {
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = 'Error';
                }
            } else if (value === 'c') {
                result.value = '';
            } else {
                result.value += value;
            }
        });
    });
});
