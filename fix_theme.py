import os

directories = ['src/app/app']

replacements = {
    'bg-[#020202]': 'bg-[#f7f4ef] dark:bg-[#020202]',
    'bg-[#050505]': 'bg-white dark:bg-[#050505]',
    'bg-[#0a0a0a]': 'bg-white dark:bg-[#0a0a0a]',
    'bg-[#111]': 'bg-white dark:bg-[#111]',
    'bg-[#151515]': 'bg-gray-100 dark:bg-[#151515]',
    'bg-[#1a1a1a]': 'bg-gray-50 dark:bg-[#1a1a1a]',
    'bg-[#000]': 'bg-[#fff] dark:bg-[#000]',
    'text-slate-200': 'text-slate-800 dark:text-slate-200',
    'text-white': 'text-slate-900 dark:text-white',
    'text-slate-400': 'text-slate-500 dark:text-slate-400',
    'text-slate-300': 'text-slate-600 dark:text-slate-300',
    'border-white/10': 'border-black/10 dark:border-white/10',
    'border-white/5': 'border-black/5 dark:border-white/5',
    'border-white/20': 'border-black/20 dark:border-white/20',
    'border-white/30': 'border-black/30 dark:border-white/30',
    'bg-white/5': 'bg-black/5 dark:bg-white/5',
    'bg-white/10': 'bg-black/10 dark:bg-white/10',
    'bg-white/20': 'bg-black/20 dark:bg-white/20',
    'bg-white/30': 'bg-black/30 dark:bg-white/30',
    'shadow-[0_0_15px_rgba(255,255,255,0.1)]': 'shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]',
}

for root_dir in directories:
    for root, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r') as f:
                    content = f.read()

                # To prevent double replacement, we will check if the replacement is already in the content
                for k, v in replacements.items():
                    content = content.replace(k, v)
                
                # Cleanup potential double replacements
                for k, v in replacements.items():
                    double = v.replace(k, v)
                    content = content.replace(double, v)

                with open(path, 'w') as f:
                    f.write(content)

print("Done")
