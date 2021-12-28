export function renderCodeBlock(code: string, language?: string) {
  return [`\`\`\`${language}`, code, '```'].join('\n');
}

export function renderInlineCode(code: string) {
  return ['`', code, '`'].join('');
}

export function renderBold(text: string) {
  return ['**', text, '**'].join('');
}

export function renderTitle(title: string, level?: 1 | 2 | 3 | 4 | 5 | 6) {
  const hash = new Array(level).fill('#').join('');
  return [hash, title, hash].join('');
}

export function renderTable(cols = [] as string[], data = [] as any) {
  const headers = '|' + cols.join('|') + '|';
  const splitline =
    '|' + new Array(cols.length).fill(':--------').join('|') + '|';
  const tableRows = [headers, splitline];
  const dataRows = data.map((d: []) => '|' + d.join('|') + '|');
  return [...tableRows, dataRows].join('\n');
}
