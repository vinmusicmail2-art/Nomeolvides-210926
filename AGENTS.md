<!-- CODEX_GLOBAL_RULES_START -->
# Global Codex Rules (synchronized)

# User Rules

- Save Codex chat archives to `E:\INSTALL_DISTRIB\Obsidian\CODEX\CODEX`.
- For each new chat, create a separate folder in `E:\INSTALL_DISTRIB\Obsidian\CODEX\CODEX\CHAT_ARCHIVES`.
- Store a readable `dialog.md` and the original `raw_session.jsonl` when local Codex session logs are available.
- Use `E:\INSTALL_DISTRIB\Obsidian\CODEX\CODEX\TOOLS\sync_codex_dialogs.ps1` to sync existing local Codex sessions into Obsidian.
- When the user asks to create a Codex Desktop project and put/move the current chat into it, do not only create a filesystem folder. Create the project folder, place the chat/context files there, then register the folder in Codex Desktop state so it appears in the Projects window: update saved workspace roots / project order / active workspace roots, remove the current thread from projectless threads, set the thread workspace root hint, and update the thread `cwd` in `state_5.sqlite`. Always create backups of `.codex-global-state.json` and `state_5.sqlite*` first, then verify the project path is present in `project-order` and the thread points to that project.
- Default desktop behavior for every new chat is to start with `ChatGPT 5.5` / `gpt-5.5` while OpenAI still provides it. For routine or бытовые tasks, use the lowest practical reasoning level. If `ChatGPT 5.5` / `gpt-5.5` is no longer available, automatically choose the lowest-ranked available newer successor model in the model list, not the largest or highest-intelligence option by default. Do not silently switch to a larger or higher-intelligence model after relaunch. Only raise the model or reasoning level when the user explicitly asks for it or the task clearly requires it, and call that out before changing it.
- For connector/integration issues like a messenger or plugin turning back on, first inspect local config and app state, verify whether there is a second enablement layer, and try to disable it yourself before asking the user for any action. Only ask the user if a real external blocker remains after that check.
- If the task or requested change is unclear, or there are multiple plausible interpretations, stop and ask one short clarifying question before making any changes. Do not guess the target, layer, or desired outcome.
- Strict write gate applies only to code, interface, data, repository, or other external-state mutations. When such a change is unclear, clarify the exact task, source, target, and expected result before acting, then wait for a separate user message containing the exact phrase `РАЗРЕШАЮ ИЗМЕНЕНИЯ`. Creating or editing documentation, reports, Obsidian notes, chat archives, and generated document files does not require this confirmation. A hook enforces the gate for supported write tools.
- Use this file as the global baseline for every chat and project. Then inspect the closest workspace or project `AGENTS.md`; files closer to the working directory apply to that subtree. Project docs such as `Wiki/CL.md` are lower-priority context, not a replacement for `AGENTS.md`. If instructions conflict or the target is still ambiguous, report the conflict and ask before acting.
- When a new project or chat archive is created, synchronize this global file into the target as a local `AGENTS.md` before reading project files or making changes. Use `E:\INSTALL_DISTRIB\Obsidian\CODEX\CODEX\TOOLS\sync_global_rules.ps1`; preserve project-specific rules below the managed global block instead of overwriting them.
- At the beginning of a new chat, run `E:\INSTALL_DISTRIB\Obsidian\CODEX\CODEX\TOOLS\sync_codex_dialogs.ps1` first so the new chat archive and its local `AGENTS.md` are created before project work starts.
- Before starting sales, competitive web checks, product-page verification, or other external browser research, enable the `browser/web` MCP if it is needed for the task.
- The user may assign a helper/auditor role named `Вальдемар`. Treat `Вальдемар` as a senior verification pass that checks the work after implementation. His standard checklist is: completeness, correctness, structure/location, stability after save/reload, and practical usability. When the user asks for `Вальдемар` to review something, make the result easy for auditing by keeping files named clearly, preserving the final state, and summarizing what changed, what remains, and where to inspect it.
<!-- CODEX_GLOBAL_RULES_END -->

# Project-specific rules

- Текущая рабочая копия сайта для дальнейших правок: `U:\Ресторан Баски\НОВЫЙ САЙТ 2`. После создания этой копии не вносить изменения в исходную папку `U:\Ресторан Баски\НОВЫЙ САЙТ`, если пользователь отдельно не попросит.
- Основной рабочий вариант лендинга NoMeOlvides зафиксирован в этом проекте.
- Запрещено без отдельного явного разрешения пользователя изменять его дизайн, структуру, композицию, тексты, фотографии, размеры, цвета, градиенты, навигацию и функционал.
- Любое изменение основного лендинга выполнять только после отдельной команды пользователя с явным разрешением на конкретное изменение.
- Перед изменениями сохранять текущую рабочую версию и проверять, что запрос относится именно к разрешённой части.
- Все визуальные макеты и изображения для согласования сохранять в обычном формате JPEG (`.jpeg`), а не PNG, если пользователь отдельно не указал другой формат.

