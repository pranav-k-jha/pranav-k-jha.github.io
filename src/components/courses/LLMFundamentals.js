export const llmFundamentals = [
  {
    id: 1,
    title: "Mathematics for Machine Learning",
    description:
      "Before mastering machine learning, it is important to understand the fundamental mathematical concepts that power these algorithms.",
    topics: [
      {
        name: "Linear Algebra",
        details:
          "This is crucial for understanding many algorithms, especially those used in deep learning. Key concepts include vectors, matrices, determinants, eigenvalues and eigenvectors, vector spaces, and linear transformations.",
      },
      {
        name: "Calculus",
        details:
          "Many machine learning algorithms involve the optimization of continuous functions, which requires an understanding of derivatives, integrals, limits, and series. Multivariable calculus and the concept of gradients are also important.",
      },
      {
        name: "Probability and Statistics",
        details:
          "These are crucial for understanding how models learn from data and make predictions. Key concepts include probability theory, random variables, probability distributions, expectations, variance, covariance, correlation, hypothesis testing, confidence intervals, maximum likelihood estimation, and Bayesian inference.",
      },
    ],
    resources: [
      {
        name: "3Blue1Brown - The Essence of Linear Algebra",
        url: "https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
      },
      {
        name: "StatQuest with Josh Starmer - Statistics Fundamentals",
        url: "https://www.youtube.com/watch?v=qBigTkBLU6g&list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9",
      },
      {
        name: "AP Statistics Intuition by Ms Aerin",
        url: "https://automata88.medium.com/list/cacc224d5e7d",
      },
      {
        name: "Immersive Linear Algebra",
        url: "https://immersivemath.com/ila/learnmore.html",
      },
      {
        name: "Khan Academy - Linear Algebra",
        url: "https://www.khanacademy.org/math/linear-algebra",
      },
      {
        name: "Khan Academy - Calculus",
        url: "https://www.khanacademy.org/math/calculus-1",
      },
      {
        name: "Khan Academy - Probability and Statistics",
        url: "https://www.khanacademy.org/math/statistics-probability",
      },
    ],
  },
  {
    id: 2,
    title: "Python for Machine Learning",
    description:
      "Python is a powerful and flexible programming language that's particularly good for machine learning, thanks to its readability, consistency, and robust ecosystem of data science libraries.",
    topics: [
      {
        name: "Python Basics",
        details:
          "Python programming requires a good understanding of the basic syntax, data types, error handling, and object-oriented programming.",
      },
      {
        name: "Data Science Libraries",
        details:
          "It includes familiarity with NumPy for numerical operations, Pandas for data manipulation and analysis, Matplotlib and Seaborn for data visualization.",
      },
      {
        name: "Data Preprocessing",
        details:
          "This involves feature scaling and normalization, handling missing data, outlier detection, categorical data encoding, and splitting data into training, validation, and test sets.",
      },
      {
        name: "Machine Learning Libraries",
        details:
          "Proficiency with Scikit-learn, a library providing a wide selection of supervised and unsupervised learning algorithms, is vital. Understanding how to implement algorithms like linear regression, logistic regression, decision trees, random forests, k-nearest neighbors (K-NN), and K-means clustering is important. Dimensionality reduction techniques like PCA and t-SNE are also helpful for visualizing high-dimensional data.",
      },
    ],
    resources: [
      { name: "Real Python", url: "https://realpython.com/" },
      {
        name: "freeCodeCamp - Learn Python",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      },
      {
        name: "Python Data Science Handbook",
        url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
      },
      {
        name: "freeCodeCamp - Machine Learning for Everybody",
        url: "https://youtu.be/i_LwzRVP7bg",
      },
      {
        name: "Udacity - Intro to Machine Learning",
        url: "https://www.udacity.com/course/intro-to-machine-learning--ud120",
      },
    ],
  },
  {
    id: 3,
    title: "Neural Networks",
    description:
      "Neural networks are a fundamental part of many machine learning models, particularly in the realm of deep learning. To utilize them effectively, a comprehensive understanding of their design and mechanics is essential.",
    topics: [
      {
        name: "Fundamentals",
        details:
          "This includes understanding the structure of a neural network, such as layers, weights, biases, and activation functions (sigmoid, tanh, ReLU, etc.)",
      },
      {
        name: "Training and Optimization",
        details:
          "Familiarize yourself with backpropagation and different types of loss functions, like Mean Squared Error (MSE) and Cross-Entropy. Understand various optimization algorithms like Gradient Descent, Stochastic Gradient Descent, RMSprop, and Adam.",
      },
      {
        name: "Overfitting",
        details:
          "Understand the concept of overfitting (where a model performs well on training data but poorly on unseen data) and learn various regularization techniques (dropout, L1/L2 regularization, early stopping, data augmentation) to prevent it.",
      },
      {
        name: "Implement a Multilayer Perceptron (MLP)",
        details:
          "Build an MLP, also known as a fully connected network, using PyTorch.",
      },
    ],
    resources: [
      {
        name: "3Blue1Brown - But what is a Neural Network?",
        url: "https://www.youtube.com/watch?v=aircAruvnKk",
      },
      {
        name: "freeCodeCamp - Deep Learning Crash Course",
        url: "https://www.youtube.com/watch?v=VyWAvY2CF9c",
      },
      {
        name: "Fast.ai - Practical Deep Learning",
        url: "https://course.fast.ai/",
      },
      {
        name: "Patrick Loeber - PyTorch Tutorials",
        url: "https://www.youtube.com/playlist?list=PLqnslRFeH2UrcDBWF5mfPGpqQDSta6VK4",
      },
    ],
  },
  {
    id: 4,
    title: "Natural Language Processing (NLP)",
    description:
      "NLP is a fascinating branch of artificial intelligence that bridges the gap between human language and machine understanding. From simple text processing to understanding linguistic nuances, NLP plays a crucial role in many applications like translation, sentiment analysis, chatbots, and much more.",
    topics: [
      {
        name: "Text Preprocessing",
        details:
          "Learn various text preprocessing steps like tokenization (splitting text into words or sentences), stemming (reducing words to their root form), lemmatization (similar to stemming but considers the context), stop word removal, etc.",
      },
      {
        name: "Feature Extraction Techniques",
        details:
          "Become familiar with techniques to convert text data into a format that can be understood by machine learning algorithms. Key methods include Bag-of-words (BoW), Term Frequency-Inverse Document Frequency (TF-IDF), and n-grams.",
      },
      {
        name: "Word Embeddings",
        details:
          "Word embeddings are a type of word representation that allows words with similar meanings to have similar representations. Key methods include Word2Vec, GloVe, and FastText.",
      },
      {
        name: "Recurrent Neural Networks (RNNs)",
        details:
          "Understand the working of RNNs, a type of neural network designed to work with sequence data. Explore LSTMs and GRUs, two RNN variants that are capable of learning long-term dependencies.",
      },
    ],
    resources: [
      {
        name: "Lena Voita - Word Embeddings",
        url: "https://lena-voita.github.io/nlp_course/word_embeddings.html",
      },
      {
        name: "RealPython - NLP with spaCy in Python",
        url: "https://realpython.com/natural-language-processing-spacy-python/",
      },
      {
        name: "Kaggle - NLP Guide",
        url: "https://www.kaggle.com/learn-guide/natural-language-processing",
      },
      {
        name: "Jay Alammar - The Illustration Word2Vec",
        url: "https://jalammar.github.io/illustrated-word2vec/",
      },
      {
        name: "Jake Tae - PyTorch RNN from Scratch",
        url: "https://jaketae.github.io/study/pytorch-rnn/",
      },
      {
        name: "colah's blog - Understanding LSTM Networks",
        url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
      },
    ],
  },
];
