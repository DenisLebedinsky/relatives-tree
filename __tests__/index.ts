import calcTree from '../src';
import { Family, IFamilyExtNode } from '../src/types';
import empty from '../samples/empty.json';
import couple from '../samples/couple.json';
import simple from '../samples/simple-family.json';
import average from '../samples/average-tree.json';

const emptyTree = calcTree(empty as any, { rootId: 'gRstruEr4' });
const coupleTree = calcTree(couple as any, { rootId: 'jsyRsE5sr' });
const simpleTree = calcTree(simple as any, { rootId: 'dyTpfj6sr' });
const average1 = calcTree(average as any, { rootId: 'kuVISwh7w' });
const average2 = calcTree(average as any, { rootId: 'PXACjDxmR' });
const average3 = calcTree(average as any, { rootId: 'UIEjvLJMd' });
const average4 = calcTree(average as any, { rootId: 'RZbkr5vAi' });
const average5 = calcTree(average as any, { rootId: 'Fbc9iwnJl' });
const average6 = calcTree(average as any, { rootId: '2DlrR0fK8' });

test('Canvas size', () => {
  expect(emptyTree.canvas).toEqual({ width: 2, height: 2 });
  expect(coupleTree.canvas).toEqual({ width: 4, height: 2 });
  expect(simpleTree.canvas).toEqual({ width: 4, height: 4 });
  expect(average1.canvas).toEqual({ width: 18, height: 12 });
  expect(average2.canvas).toEqual({ width: 20, height: 10 });
  expect(average3.canvas).toEqual({ width: 18, height: 12 });
  expect(average4.canvas).toEqual({ width: 8, height: 6 });
  expect(average5.canvas).toEqual({ width: 14, height: 10 });
  expect(average6.canvas).toEqual({ width: 20, height: 10 });
});

test('Family size & position', () => {
  function convert(families: ReadonlyArray<Family>) {
    return families.map(f => [f.id, f.top, f.left, f.right, f.width].join('|'));
  }

  expect(convert(emptyTree.families)).toEqual(['1|0|0|2|2']);
  expect(convert(coupleTree.families)).toEqual(['1|0|0|4|4']);
  expect(convert(simpleTree.families)).toEqual(['1|0|1|3|2', '2|0|0|4|4']);
  expect(convert(average1.families)).toEqual(['1|4|0|18|18', '2|2|5|13|8', '3|0|3|11|8', '4|6|2|6|4', '5|6|6|14|8', '6|8|8|12|4']);
  expect(convert(average2.families)).toEqual(['1|0|7|20|13', '2|2|0|18|18', '3|4|2|6|4', '4|4|6|14|8', '5|6|8|12|4']);
  expect(convert(average3.families)).toEqual(['1|4|0|18|18', '2|2|5|13|8', '3|0|7|15|8', '4|6|2|6|4', '5|6|6|14|8', '6|8|8|12|4']);
  expect(convert(average4.families)).toEqual(['1|0|2|6|4', '2|0|0|8|8', '3|2|2|6|4']);
  expect(convert(average5.families)).toEqual(['1|6|3|7|4', '2|4|0|10|10', '3|2|4|12|8', '4|0|6|14|8']);
  expect(convert(average6.families)).toEqual(['1|0|12|14|2', '2|0|7|20|13', '3|2|0|18|18', '4|4|2|6|4', '5|4|6|14|8', '6|6|8|12|4']);
});

test('Node position', () => {
  function convert(nodes: ReadonlyArray<IFamilyExtNode>) {
    return nodes.map(n => [n.id, n.top, n.left].join('|'));
  }

  expect(convert(emptyTree.nodes)).toEqual(['gRstruEr4|0|0']);
  expect(convert(coupleTree.nodes)).toEqual(['jsyRsE5sr|0|0', 'pdRwdtR54|0|2']);
  expect(convert(simpleTree.nodes)).toEqual(['dyTpfj6sr|0|1', 'ahfR5lR2s|2|0', 'aoF9dn5Ew|2|2']);
  expect(convert(average1.nodes)).toEqual(['011jVS4rb|4|7', 'PXACjDxmR|4|9', 'HkqEDLvxE|6|0', 'kuVISwh7w|6|2', 'vRSjcaDGj|6|4', 'RZbkr5vAi|6|8', 'UIEjvLJMd|6|10', 'ZVi8fWDBx|6|14', 'wJ1EBvc5m|6|16', 'ypu71w9_Q|2|5', 'GEf8zF7A4|2|7', '2DlrR0fK8|2|11', 'TsyAkbF89|0|3', 'T54Km7uOC|0|5', 'gsgwGS_Kw|0|7', 'ZgTZx9uXQ|0|9', 'Fbc9iwnJl|8|3', '6_OTJvbvS|8|6', 'ilad8NH6g|8|8', 'JhSCcdFEP|8|10', '6hNxNY1-I|8|12', 'Z0QA5oKks|10|9']);
  expect(convert(average2.nodes)).toEqual(['2DlrR0fK8|0|12', 'PXACjDxmR|2|7', '011jVS4rb|2|9', 'H-06WvsfJ|2|18', 'HkqEDLvxE|4|0', 'vRSjcaDGj|4|2', 'kuVISwh7w|4|4', 'UIEjvLJMd|4|8', 'RZbkr5vAi|4|10', 'wJ1EBvc5m|4|14', 'ZVi8fWDBx|4|16', 'Fbc9iwnJl|6|3', '6_OTJvbvS|6|6', 'JhSCcdFEP|6|8', 'ilad8NH6g|6|10', '6hNxNY1-I|6|12', 'Z0QA5oKks|8|9']);
  expect(convert(average3.nodes)).toEqual(['PXACjDxmR|4|7', '011jVS4rb|4|9', 'HkqEDLvxE|6|0', 'vRSjcaDGj|6|2', 'kuVISwh7w|6|4', 'UIEjvLJMd|6|8', 'RZbkr5vAi|6|10', 'wJ1EBvc5m|6|14', 'ZVi8fWDBx|6|16', '2DlrR0fK8|2|5', 'GEf8zF7A4|2|9', 'ypu71w9_Q|2|11', 'ZgTZx9uXQ|0|7', 'gsgwGS_Kw|0|9', 'T54Km7uOC|0|11', 'TsyAkbF89|0|13', 'Fbc9iwnJl|8|3', '6_OTJvbvS|8|6', 'JhSCcdFEP|8|8', 'ilad8NH6g|8|10', '6hNxNY1-I|8|12', 'Z0QA5oKks|10|9']);
  expect(convert(average4.nodes)).toEqual(['RZbkr5vAi|0|2', 'UIEjvLJMd|0|4', '6_OTJvbvS|2|0', 'ilad8NH6g|2|2', 'JhSCcdFEP|2|4', '6hNxNY1-I|2|6', 'Z0QA5oKks|4|3']);
  expect(convert(average5.nodes)).toEqual(['vRSjcaDGj|6|3', 'kuVISwh7w|6|5', 'Fbc9iwnJl|8|4', 'iFiwqrWx-|4|0', '6vASIIxhd|4|2', 'PXACjDxmR|4|6', '011jVS4rb|4|8', '2DlrR0fK8|2|4', 'GEf8zF7A4|2|8', 'ypu71w9_Q|2|10', 'ZgTZx9uXQ|0|6', 'gsgwGS_Kw|0|8', 'T54Km7uOC|0|10', 'TsyAkbF89|0|12']);
  expect(convert(average6.nodes)).toEqual(['2DlrR0fK8|0|12', '011jVS4rb|2|7', 'PXACjDxmR|2|9', 'H-06WvsfJ|2|18', 'HkqEDLvxE|4|0', 'kuVISwh7w|4|2', 'vRSjcaDGj|4|4', 'RZbkr5vAi|4|8', 'UIEjvLJMd|4|10', 'ZVi8fWDBx|4|14', 'wJ1EBvc5m|4|16', 'Fbc9iwnJl|6|3', '6_OTJvbvS|6|6', 'ilad8NH6g|6|8', 'JhSCcdFEP|6|10', '6hNxNY1-I|6|12', 'Z0QA5oKks|8|9']);
});

test('Node sub tree', () => {
  function convert(nodes: ReadonlyArray<IFamilyExtNode>) {
    return nodes.map(n => [n.id, n.hasSubTree].join('|'));
  }

  expect(convert(emptyTree.nodes)).toEqual(['gRstruEr4|false']);
  expect(convert(coupleTree.nodes)).toEqual(['jsyRsE5sr|false','pdRwdtR54|false' ]);
  expect(convert(simpleTree.nodes)).toEqual(['dyTpfj6sr|false', 'ahfR5lR2s|false', 'aoF9dn5Ew|false']);
  expect(convert(average1.nodes)).toEqual(['011jVS4rb|false', 'PXACjDxmR|false', 'HkqEDLvxE|false', 'kuVISwh7w|false', 'vRSjcaDGj|true', 'RZbkr5vAi|false', 'UIEjvLJMd|false', 'ZVi8fWDBx|false', 'wJ1EBvc5m|false', 'ypu71w9_Q|false', 'GEf8zF7A4|false', '2DlrR0fK8|true', 'TsyAkbF89|false', 'T54Km7uOC|false', 'gsgwGS_Kw|false', 'ZgTZx9uXQ|false', 'Fbc9iwnJl|false', '6_OTJvbvS|false', 'ilad8NH6g|false', 'JhSCcdFEP|false', '6hNxNY1-I|false', 'Z0QA5oKks|false']);
  expect(convert(average2.nodes)).toEqual(['2DlrR0fK8|false', 'PXACjDxmR|false', '011jVS4rb|true', 'H-06WvsfJ|false', 'HkqEDLvxE|false', 'vRSjcaDGj|true', 'kuVISwh7w|false', 'UIEjvLJMd|false', 'RZbkr5vAi|false', 'wJ1EBvc5m|false', 'ZVi8fWDBx|false', 'Fbc9iwnJl|false', '6_OTJvbvS|false', 'JhSCcdFEP|false', 'ilad8NH6g|false', '6hNxNY1-I|false', 'Z0QA5oKks|false']);
  expect(convert(average3.nodes)).toEqual(['PXACjDxmR|false', '011jVS4rb|false', 'HkqEDLvxE|false', 'vRSjcaDGj|true', 'kuVISwh7w|false', 'UIEjvLJMd|false', 'RZbkr5vAi|false', 'wJ1EBvc5m|false', 'ZVi8fWDBx|false', '2DlrR0fK8|true', 'GEf8zF7A4|false', 'ypu71w9_Q|false', 'ZgTZx9uXQ|false', 'gsgwGS_Kw|false', 'T54Km7uOC|false', 'TsyAkbF89|false', 'Fbc9iwnJl|false', '6_OTJvbvS|false', 'JhSCcdFEP|false', 'ilad8NH6g|false', '6hNxNY1-I|false', 'Z0QA5oKks|false']);
  expect(convert(average4.nodes)).toEqual(['RZbkr5vAi|false', 'UIEjvLJMd|true', '6_OTJvbvS|false', 'ilad8NH6g|false', 'JhSCcdFEP|false', '6hNxNY1-I|false', 'Z0QA5oKks|false']);
  expect(convert(average5.nodes)).toEqual(['vRSjcaDGj|false', 'kuVISwh7w|false', 'Fbc9iwnJl|false', 'iFiwqrWx-|false', '6vASIIxhd|false', 'PXACjDxmR|true', '011jVS4rb|true', '2DlrR0fK8|true', 'GEf8zF7A4|false', 'ypu71w9_Q|false', 'ZgTZx9uXQ|false', 'gsgwGS_Kw|false', 'T54Km7uOC|false', 'TsyAkbF89|false']);
  expect(convert(average6.nodes)).toEqual(['2DlrR0fK8|false', '011jVS4rb|true', 'PXACjDxmR|false', 'H-06WvsfJ|false', 'HkqEDLvxE|false', 'kuVISwh7w|false', 'vRSjcaDGj|true', 'RZbkr5vAi|false', 'UIEjvLJMd|false', 'ZVi8fWDBx|false', 'wJ1EBvc5m|false', 'Fbc9iwnJl|false', '6_OTJvbvS|false', 'ilad8NH6g|false', 'JhSCcdFEP|false', '6hNxNY1-I|false', 'Z0QA5oKks|false']);
});