# Команды сборки и управления версией для лендинга квартиры

.PHONY: install build preview clean deploy help rollback-down rollback-up rollback-down-safe rollback-up-safe

help:
	@echo "Доступные команды Makefile:"
	@echo "  make install    - Установка всех зависимостей"
	@echo "  make build      - Сборка проекта в dist/"
	@echo "  make preview    - Локальный сервер разработки"
	@echo "  make clean      - Удаление временных файлов (node_modules/.cache, dist)"
	@echo "  make deploy     - Деплой на GitHub Pages через CI/CD"
	@echo ""
	@echo "Команды отката версий:"
	@echo "  make rollback-down   - Откат на одну версию вниз (git revert HEAD~1)"
	@echo "  make rollback-up     - Откат на одну версию вверх (переход на HEAD+1, требует pull/fetch)"

install:
	npm ci

build:
	npm run build

preview:
	npm run preview

clean:
	rm -rf dist/ node_modules/.cache/ .env.local

deploy: build
	@echo "Сборка завершена. Деплой произойдет автоматически через GitHub Actions при пуше на main."
	@echo "Для ручного деплоя создайте PR или push на main ветку."

rollback-down:
	@git fetch origin HEAD
	@git revert -m 1 HEAD~1
	@git push origin main --force

rollback-up:
	@git fetch origin
	@git checkout $(origin/main)
	@echo "Переход к последнему коммиту. Для возврата назад используйте 'git reset'."
	@git log -2

rollback-down-safe:
	@git revert HEAD~1 --no-commit && git commit -m "Revert to previous version"
	@git push origin main

rollback-up-safe:
	@git fetch origin
	@git log -1 HEAD | grep "^commit " | cut -d ' ' -f 3 > /tmp/last_commit
	@git reset --hard $(origin/main)~1 2>/dev/null || git reset --hard HEAD^
