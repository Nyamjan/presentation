import os

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()

            content = content.replace('shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]', 'shadow-[0_0_15px_rgba(255,255,255,0.1)]')

            with open(path, 'w') as f:
                f.write(content)

print("Done shadow")
