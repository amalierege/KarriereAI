# KarriereAI
## Project Brief
KarriereAI is a machine learning model designed to determine a suitable technological career path for a user based on their skills and interests.
This is a project done through the course Deep Learning Engineering at Western Norway University of Applied Sciences. 
The report, written in accordance with this model implementation, is a part of the final-grade of said course.

## Purpose
The purpose and goal of this neural network is to predict a fitting job title based on input from a user through an interactive quiz. 
This model is a part of a bigger marketing campaign aimed to motivate women to work within the technological field and take up careers in software development inter alia.

## Architecture, Implementation and Deployment
The model is a feed-forward neural network (FNN) implemented through a simple sequential network of dense layers, working as a classifier of skills to job titles in the tech market. 
Pre-processing of data is used before fitting the model, and contains normalization and encoding of the content.
<br/><br/>
The interactive quiz is designed to define the user's skills, and will forward said skills to the model to make predictions on them. 
It is a part of a bachelor's project implemented in Vue.js front-end framework, which will be used to deploy the model.

## Dataset
The dataset used for training contains job titles which are matched up against relevant skills. 
The file itself is from Van-Duyet (et al., 2017), which is a dataset used in a sub-part of their Skills2vec model architecture.

## Evaluation
To evaluate the performance of the model, standard metrics like accuracy, precision and recall will be used. In addition, a confusion matrix and an F1 score will be used.

## How to Recreate and Run the Model
These files are the final versions of the model and Jupyter Notebook:
- Model - karriereai_model_finished.keras
- Notebook - KarriereAI_v3.1.keras

To run the notebook, make sure to create a virtual environment and install all the required frameworks listed in the requirements.txt file. Make sure to fetch the correct version of Python through the file as well.
<br/><br/>
*Note: You may experience that TensorFlow.js is incompatible with Windows OS, and requires a UNIX-based OS. Make sure to remove this from the requirements file if that's the case.*

## References
Rege, A., Markhus, B. & Ceballos, A. (2024). *Fruitoo* [Code Repository]. https://www.kaggle.com/code/amalierege/fruit-bonanza#Fruitoo
<br/>
Shamim, A. (2025, b). *AI_Career_Recommendation_EDA_ML* [Code Repository]. https://www.kaggle.com/code/adilshamim8/ai-career-recommendation-eda-ml 
<br/>
Van-Duyet, L., Quan, V. M. & An, D. Q. (2017). *Skill2vec: Machine Learning Approach for Determining the Relevant Skills from Job Description* [Data set]. https://arxiv.org/pdf/1707.09751
