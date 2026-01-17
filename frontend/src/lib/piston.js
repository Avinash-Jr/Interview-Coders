// Piston API is a service for Code Execution in problem solving page
const PISTON_API = "https://emkc.org/api/v2/piston";

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
  c: { language: "c", version: "11.0.0" },
  cpp: { language: "cpp", version: "17.0.0" },
  go: { language: "go", version: "1.20.0" },
  swift: { language: "swift", version: "5.7.0" },
};

/**
 * @param {string} language - programming language
 * @param {string} code - source code to execute
 * @param {string} [stdin] - optional standard input
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code, stdin = "") {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const fileName = getFileName(language);

    const response = await fetch(`${PISTON_API}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: languageConfig.language,
        version: languageConfig.version,
        files: [
          {
            name: fileName,
            content: code,
          },
        ],
        stdin,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();

    const compileOutput = data.compile?.output || "";
    const runOutput = data.run?.output || "";
    const stderr = data.run?.stderr || "";

    if (compileOutput || stderr) {
      return {
        success: false,
        error: compileOutput || stderr,
        output: runOutput,
      };
    }

    return {
      success: true,
      output: runOutput || "No output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}

/**
 * Returns correct file name per language (CRITICAL for Java/C++)
 */
function getFileName(language) {
  switch (language) {
    case "javascript":
      return "main.js";
    case "python":
      return "main.py";
    case "java":
      return "Main.java"; // REQUIRED by JVM
    case "c":
      return "main.c";
    case "cpp":
      return "main.cpp";
    case "go":
      return "main.go";
    case "swift":
      return "main.swift";
    default:
      return "main.txt";
  }
}
