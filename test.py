from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_input', methods=['POST'])
def process_input():
    user_input = request.form['user_input']
    if user_input.lower() == "hello":
        output_text = "Hi there! How can I help you?"
    elif user_input.lower() == "goodbye":
        output_text = "Goodbye! Have a great day!"
    else:
        output_text = "Sorry, I didn't understand that."
    return output_text

if __name__ == '__main__':
    app.run(debug=True)
