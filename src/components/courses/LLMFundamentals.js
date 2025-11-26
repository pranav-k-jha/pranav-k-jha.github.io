// llmFundamentals.js
// JSON-structured content for use in React

export const llmFundamentals = {
  title: "LLM Fundamentals",
  intro:
    "This section introduces essential knowledge about mathematics, Python, and neural networks. You might not want to start here but refer to it as needed.",
  sections: [
    {
      id: 1,
      title: "Mathematics for Machine Learning",
      description:
        "Before mastering machine learning, it is important to understand the fundamental mathematical concepts that power these algorithms.",
      topics: [
        {
          name: "Linear Algebra",
          details:
            "Crucial for many algorithms, especially deep learning. Key concepts include vectors, matrices, determinants, eigenvalues/eigenvectors, vector spaces, and linear transformations.",
        },
        {
          name: "Calculus",
          details:
            "Useful for optimization of continuous functions. Includes derivatives, integrals, limits, series, multivariable calculus, and gradients.",
        },
        {
          name: "Probability and Statistics",
          details:
            "Essential for understanding how models learn and make predictions. Includes probability theory, random variables, distributions, expectation, variance, covariance, correlation, hypothesis testing, confidence intervals, MLE, and Bayesian inference.",
        },
      ],
      resources: [
        {
          name: "3Blue1Brown - The Essence of Linear Algebra",
          url: "https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
        },
        {
          name: "StatQuest - Statistics Fundamentals",
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
        "Python is a powerful and flexible programming language that's particularly good for machine learning.",
      topics: [
        {
          name: "Python Basics",
          details:
            "Covers syntax, data types, error handling, and object-oriented programming.",
        },
        {
          name: "Data Science Libraries",
          details:
            "Includes NumPy (numerical operations), Pandas (data manipulation), Matplotlib and Seaborn (visualization).",
        },
        {
          name: "Data Preprocessing",
          details:
            "Feature scaling, normalization, missing data handling, outlier detection, categorical encoding, and data splitting.",
        },
        {
          name: "Machine Learning Libraries",
          details:
            "Scikit-learn algorithms: linear/logistic regression, decision trees, random forests, KNN, K-means, PCA, t-SNE, etc.",
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
        "Neural networks are a fundamental part of many machine learning models, particularly in deep learning. Understanding their design and mechanics is essential.",
      topics: [
        {
          name: "Fundamentals",
          details:
            "Includes network structure such as layers, weights, biases, and activation functions (sigmoid, tanh, ReLU, etc.).",
        },
        {
          name: "Training and Optimization",
          details:
            "Learn backpropagation, loss functions (MSE, Cross-Entropy), and optimization algorithms like Gradient Descent, SGD, RMSprop, and Adam.",
        },
        {
          name: "Overfitting",
          details:
            "Understand overfitting and regularization methods like dropout, L1/L2 regularization, early stopping, and data augmentation.",
        },
        {
          name: "Implement a Multilayer Perceptron (MLP)",
          details:
            "Build a fully connected neural network (MLP) using PyTorch.",
        },
      ],
      resources: [
        {
          name: "3Blue1Brown - What is a Neural Network?",
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
        "NLP bridges human language and machine understanding. It includes text processing, linguistic understanding, and deep learning applied to language tasks.",
      topics: [
        {
          name: "Text Preprocessing",
          details:
            "Tokenization, stemming, lemmatization, stopword removal, and other preprocessing techniques.",
        },
        {
          name: "Feature Extraction Techniques",
          details:
            "Methods like Bag-of-Words, TF-IDF, and n-grams for converting text into ML-friendly numerical features.",
        },
        {
          name: "Word Embeddings",
          details:
            "Techniques like Word2Vec, GloVe, and FastText that create vector representations of words.",
        },
        {
          name: "Recurrent Neural Networks (RNNs)",
          details:
            "Sequence models including RNNs, LSTMs, and GRUs to handle long-term dependencies in text.",
        },
      ],
      resources: [
        {
          name: "Lena Voita - Word Embeddings",
          url: "https://lena-voita.github.io/nlp_course/word_embeddings.html",
        },
        {
          name: "RealPython - NLP with spaCy",
          url: "https://realpython.com/natural-language-processing-spacy-python/",
        },
        {
          name: "Kaggle - NLP Guide",
          url: "https://www.kaggle.com/learn-guide/natural-language-processing",
        },
        {
          name: "Jay Alammar - The Illustrated Word2Vec",
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
  ],
};
