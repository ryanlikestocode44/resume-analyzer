ds_skills = {"python", "machine learning", "data analysis", "tensorflow", "pandas", "flask", "streamlit", "deep learning", "data visualization", "sql", "numpy", "scikit-learn", "keras", "pytorch", "data science", "statistics", "big data", "hadoop", "spark", "data mining", "data wrangling", "data preprocessing", "feature engineering", "model evaluation", "natural language processing", "nlp", "computer vision", "cv", "time series analysis", "reinforcement learning"}
web_skills = {"html", "css", "javascript", "react", "node.js", "django", "flask", "angular.js", "vue.js", "wordpress", "c#", "php", "laravel", "bootstrap", "jquery", "sql", "nosql", "mongodb", "rest api", "graphql", "web development", "full stack", "responsive design", "web performance", "web security"}
android_skills = {"android", "kotlin", "java", "android studio", "flutter", "react native", "xml", "gradle", "material design", "firebase", "sqlite", "rest api", "mvvm", "mvp", "jetpack compose", "coroutines", "dagger hilt"}
ios_skills = {"swift", "ios", "xcode", "objective-c", "swiftui", "cocoa touch", "core data", "core animation", "xamarin", "flutter", "react native", "app store", "testflight", "push notifications", "in-app purchases", "apple pay", "swift package manager"}
uiux_skills = {"figma", "ui design", "ux research", "adobe xd", "sketch", "invision", "user interface", "user experience", "wireframing", "prototyping", "usability testing", "interaction design", "visual design", "user flows", "information architecture"}
cloud_skills = {"aws", "azure", "google cloud", "cloud computing", "cloud security", "docker", "kubernetes", "terraform", "ci/cd", "serverless", "microservices", "cloud architecture", "cloud migration", "cloud storage", "cloud networking"}
# Predefined skills for each field

# Course lists for different fields
ds_course = [{"title": 'Machine Learning Crash Course by Google [Free]', "url": 'https://developers.google.com/machine-learning/crash-course'},
             {"title": 'Machine Learning A-Z by Udemy', "url": 'https://www.udemy.com/course/machinelearning/'},
             {"title": 'Machine Learning by Andrew NG', "url": 'https://www.coursera.org/learn/machine-learning'},
             {"title": 'Data Scientist Master Program of Simplilearn (IBM)', "url": 'https://www.simplilearn.com/big-data-and-analytics/senior-data-scientist-masters-program-training'},
             {"title": 'Data Science Foundations: Fundamentals by LinkedIn', "url": 'https://www.linkedin.com/learning/data-science-foundations-fundamentals-5'},
             {"title": 'Data Scientist with Python', "url": 'https://www.datacamp.com/tracks/data-scientist-with-python'},
             {"title": 'Programming for Data Science with Python', "url": 'https://www.udacity.com/course/programming-for-data-science-nanodegree--nd104'},
             {"title": 'Programming for Data Science with R', "url": 'https://www.udacity.com/course/programming-for-data-science-nanodegree-with-R--nd118'},
             {"title": 'Introduction to Data Science', "url": 'https://www.udacity.com/course/introduction-to-data-science--cd0017'},
             {"title": 'Intro to Machine Learning with TensorFlow', "url": 'https://www.udacity.com/course/intro-to-machine-learning-with-tensorflow-nanodegree--nd230'}]

web_course = [{"title": 'Django Crash course [Free]', "url": 'https://youtu.be/e1IyzVyrLSU'},
              {"title": 'Python and Django Full Stack Web Developer Bootcamp', "url": 'https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp'},
              {"title": 'React Crash Course [Free]', "url": 'https://youtu.be/Dorf8i6lCuk'},
              {"title": 'ReactJS Project Development Training', "url": 'https://www.dotnettricks.com/training/masters-program/reactjs-certification-training'},
              {"title": 'Full Stack Web Developer - MEAN Stack', "url": 'https://www.simplilearn.com/full-stack-web-developer-mean-stack-certification-training'},
              {"title": 'Node.js and Express.js [Free]', "url": 'https://youtu.be/Oe421EPjeBE'},
              {"title": 'Flask: Develop Web Applications in Python', "url": 'https://www.educative.io/courses/flask-develop-web-applications-in-python'},
              {"title": 'Full Stack Web Developer by Udacity', "url": 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044'},
              {"title": 'Front End Web Developer by Udacity', "url": 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011'},
              {"title": 'Become a React Developer by Udacity', "url": 'https://www.udacity.com/course/react-nanodegree--nd019'}]

android_course = [{"title": 'Android Development for Beginners [Free]', "url": 'https://youtu.be/fis26HvvDII'},
                  {"title": 'Android App Development Specialization', "url": 'https://www.coursera.org/specializations/android-app-development'},
                  {"title": 'Associate Android Developer Certification', "url": 'https://grow.google/androiddev/#?modal_active=none'},
                  {"title": 'Become an Android Kotlin Developer by Udacity', "url": 'https://www.udacity.com/course/android-kotlin-developer-nanodegree--nd940'},
                  {"title": 'Android Basics by Google', "url": 'https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803'},
                  {"title": 'The Complete Android Developer Course', "url": 'https://www.udemy.com/course/complete-android-n-developer-course/'},
                  {"title": 'Building an Android App with Architecture Components', "url": 'https://www.linkedin.com/learning/building-an-android-app-with-architecture-components'},
                  {"title": 'Android App Development Masterclass using Kotlin', "url": 'https://www.udemy.com/course/android-oreo-kotlin-app-masterclass/'},
                  {"title": 'Flutter & Dart - The Complete Flutter App Development Course', "url": 'https://www.udemy.com/course/flutter-dart-the-complete-flutter-app-development-course/'},
                  {"title": 'Flutter App Development Course [Free]', "url": 'https://youtu.be/rZLR5olMR64'}]

ios_course = [{"title": 'IOS App Development by LinkedIn', "url": 'https://www.linkedin.com/learning/subscription/topics/ios'},
              {"title": 'iOS & Swift - The Complete iOS App Development Bootcamp', "url": 'https://www.udemy.com/course/ios-13-app-development-bootcamp/'},
              {"title": 'Become an iOS Developer', "url": 'https://www.udacity.com/course/ios-developer-nanodegree--nd003'},
              {"title": 'iOS App Development with Swift Specialization', "url": 'https://www.coursera.org/specializations/app-development'},
              {"title": 'Mobile App Development with Swift', "url": 'https://www.edx.org/professional-certificate/curtinx-mobile-app-development-with-swift'},
              {"title": 'Swift Course by LinkedIn', "url": 'https://www.linkedin.com/learning/subscription/topics/swift-2'},
              {"title": 'Objective-C Crash Course for Swift Developers', "url": 'https://www.udemy.com/course/objectivec/'},
              {"title": 'Learn Swift by Codecademy', "url": 'https://www.codecademy.com/learn/learn-swift'},
              {"title": 'Swift Tutorial - Full Course for Beginners [Free]', "url": 'https://youtu.be/comQ1-x2a1Q'},
              {"title": 'Learn Swift Fast - [Free]', "url": 'https://youtu.be/FcsY1YPBwzQ'}]

uiux_course = [{"title": 'Google UX Design Professional Certificate', "url": 'https://www.coursera.org/professional-certificates/google-ux-design'},
               {"title": 'UI / UX Design Specialization', "url": 'https://www.coursera.org/specializations/ui-ux-design'},
               {"title": 'The Complete App Design Course - UX, UI and Design Thinking', "url": 'https://www.udemy.com/course/the-complete-app-design-course-ux-and-ui-design/'},
               {"title": 'UX & Web Design Master Course: Strategy, Design, Development', "url": 'https://www.udemy.com/course/ux-web-design-master-course-strategy-design-development/'},
               {"title": 'The Complete App Design Course - UX, UI and Design Thinking', "url": 'https://www.udemy.com/course/the-complete-app-design-course-ux-and-ui-design/'},
               {"title": 'DESIGN RULES: Principles + Practices for Great UI Design', "url": 'https://www.udemy.com/course/design-rules/'},
               {"title": 'Become a UX Designer by Udacity', "url": 'https://www.udacity.com/course/ux-designer-nanodegree--nd578'},
               {"title": 'Adobe XD Tutorial: User Experience Design Course [Free]', "url": 'https://youtu.be/68w2VwalD5w'},
               {"title": 'Adobe XD for Beginners [Free]', "url": 'https://youtu.be/WEljsc2jorI'},
               {"title": 'Adobe XD in Simple Way', "url": 'https://learnux.io/course/adobe-xd'}]

resume_videos = ['https://youtu.be/3agP4x8LYFM','https://youtu.be/fS_t3yS8v5s',
                 'https://youtu.be/aArb68OBFPg','https://youtu.be/h-NuvOeWWh0',
                 'https://youtu.be/BdQniERyw8I','https://youtu.be/Tt08KmFfIYQ',
                 'https://youtu.be/CLUsplI4xMU','https://youtu.be/bhwEsfXS6y8']

interview_videos = ['https://youtu.be/Tt08KmFfIYQ','https://youtube/KukmClH1KoA',
                    'https://youtu.be/7_aAicmPB3A','https://youtube/1mHjMNZZvFo',
                    'https://youtu.be/WfdtKbAJOmE','https://youtube/wFbU185CvDU'
                    'https://youtu.be/wFbU185CvDU','https://youtube/TZ3C_syg9Ow']