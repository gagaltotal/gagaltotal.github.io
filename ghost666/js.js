BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    "Ghost Command Line: <span class='code'>about</span>, <span class='code'>research</span>, <span class='code'>skill</span>, <span class='code'>contact</span>",
  about:
    "Hello, <br>Mr.GhostGTR666. developer & pentesting research, website <a href='https://gagaltotal.github.io' target='_blank' class='success link'>gagaltotal666</a>. Try new things and solve problems.",
  skill:
    "Write code, Shell, Exploit, Linuxer(Linux Sysadminstrator), Network Engineering, PHP and Python, known as <span class='code'>RedHat Team</span>.",
  research:
    "<span class='code'>Blog Gagaltotal666</span>, gagaltotal666.site<br>" +
    "<span class='code'>Gagaltotal666</span>, gagaltotal.github.io<br>" +
    "View full video dokumentasi <a href='https://www.youtube.com/c/MrGhostGTR666' class='success link'>Youtube</a> profile.",
  contact:
    "You can contact me at <a href='mailto:gattimusprime@gmail.com' class='success link'>Mr.Gagaltotal666</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">${input}: command not found</div>`;
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
