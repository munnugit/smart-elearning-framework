from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Mock recommendation data
recommendations = {
    "user1": [
        "Course 1: Introduction to Machine Learning",
        "Course 2: Advanced JavaScript",
        "Course 3: Web Development Basics"
    ],
    "user2": [
        "Course 1: Data Science Fundamentals",
        "Course 2: Python for Beginners",
        "Course 3: Algorithms and Data Structures"
    ]
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/recommendations', methods=['POST'])
def get_recommendations():
    data = request.json
    user_id = data.get('userId')
    if user_id in recommendations:
        return jsonify({'success': True, 'recommendations': recommendations[user_id]})
    else:
        return jsonify({'success': False, 'message': 'No recommendations found for this user.'})

# Handle contact form submission
@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Here you can implement sending the email or saving the data to a database
    # For now, let's simulate sending an email
    if name and email and message:
        # Simulate success
        return jsonify({'message': 'Thank you for contacting us! We will get back to you shortly.'})
    else:
        return jsonify({'message': 'Failed to submit the form. Please fill in all fields.'})

if __name__ == '__main__':
    app.run(debug=True)
