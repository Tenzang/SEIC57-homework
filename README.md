# SEIC57

### Steps to do

1. Set up your repository.
2. Do your homework.
3. Submit your homework.

### Set up your repository

You only need to do this _**once**_, not every time you're submitting homework!

**1. Fork this repository**

_'Forking' creates a personal, 'forked' copy of this repository on your Github account._

- Hit the **Fork** button in the top right-hand corner of this page.

**2. Clone your forked repository to your computer**

_'Cloning' takes your 'forked' repository on GitHub and creates a local copy - or 'clone' - on your computer._

- Make sure you're browser is open to **your** forked version of this repository on Github (eg [http://github.com/{YOUR_USERNAME}/SEIC57-homework](http://github.com/{YOUR_USERNAME}/SEIC57-homework)).
- Hit the **Clone or Download** button in the top right-hand corner of the page and copy the URL to your clipboard.
- Open your computer's terminal to the directory in which you intend to store your homework.
- `git clone URL_OF_YOUR_FORK_ON_GITHUB` (where `URL_OF_YOUR_FORK_ON_GITHUB` is the URL you copied after hitting 'Clone or Download', above).

**3. Add an upstream remote repository**

_Adding an upstream repository links the local repository on your computer to the original repository on Github (i.e. mine, the one from which you created the fork)_

- `cd SEIC57-homework`
- `git remote add upstream https://github.com/Tenzang/SEIC57-homework.git`
- `git pull upstream main`

### Do your homework

You should put each night's homework in a new folder within the appropriate directory of your homework repo. So, for day two, where you have two tasks ("Calculator" and "Strings"), you might do something like this:

1. Open Terminal/iTerm2/Ubuntu;
2. Go to your local homework repo (eg, `cd ~/Projects/SEIC57-homework`);
3. From here, go to the folder matching your name within that repo, and the appropriate week / day (eg, `Taylor Swift/wk01`);
4. Create new folders for each of the day's homework tasks: (eg `mkdir calculator` and `mkdir strings`);
5. Create the files necessary to complete the homework in their respective directories;
6. Get to it!

### Submit your homework

You need to do this every time you're submitting homework.

- **Commit your work to your local repository progressively**
  - Make sure you are in the correct folder containing the homework you want to submit.
  - `git add .`
  - `git commit -m "YOUR_COMMIT_MESSAGE_GOES_HERE"`(where `YOUR_COMMIT_MESSAGE_GOES_HERE` is your description of the work you are committing)
- **Push your changes to your forked repository**
  - `git pull upstream main` - merge changes that have been made to this repository into your own local repository (if a weird screen appears on this step, PLEASE SEE THE **IMPORTANT 2** NOTED BELOW).
  - `git push origin main`
- **Once you're finished, submit a pull request for me to accept your homework**
  - Navigate to your forked version of this repository on Github (eg [https://github.com/{YOUR_USERNAME_HERE}/SEIC57-homework](https://github.com/{YOUR_USERNAME_HERE}/SEIC57-homework)).
  - Hit the **Pull request** button.
  - Make sure the destination for the pull request is set to my repository, not your own or anyone else's.
  * **IMPORTANT:**
    In the pull request comment, tell me the following:
    "1. How difficult did you find this (out of 10)? (0 being no problems at all, 10 being impossible); 2. Was there anything that you struggled with?; 3. Is there anything that you'd like some further information on?; 4. Roughly how long did it take?"
    **If you don't mention anything in the Pull Request comments, we will assume you had no problems at all with it, and you will receive no feedback about your homework.**
    If you want to follow up on any issues you had with the homework, the ideal time for that will be during the more unstructured lab time after lunch - come and see Joel or myself then and we can go over any outstanding questions.
    **Note:** if I haven't yet merged your Pull Request into my main homework repo before it's time to submit the next day's homework, you won't be able to create a new Pull Request. That's okay - for the new homework just add a new comment to the open (existing) Pull Request, featuring the same four points given above to describe your response to it.
  * **IMPORTANT 2:**
    When you make pull request by `git pull upstream main`, git might generate the auto merge message for you. Don't panic! Just type `:wq` (it will weirdly appear on the bottom left of your screen once you start typing) and hit `return` key on your keyboard to accept the message, then you can move on with you life!