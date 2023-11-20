import { Item } from '../interfaces/item';
import { getChildrenVolume, getNestedNodesMap } from './items.selectors';

describe('getContainerFreeVolume', () => {
    it('should return volume of item children', () => {
        const container = {
            id: '4',
            description: 'container test',
            volume: 100,
            isContainer: true,
        };
        const items: Item[] = [
            {
                id: '1',
                description: 'test 1',
                volume: 1,
                parentId: '4',
            },
            {
                id: '2',
                description: 'test 2',
                volume: 10,
                isContainer: true,
                parentId: '4',
            },
            {
                id: '3',
                description: 'test 3',
                volume: 10,
                parentId: '4',
            },
            container,
        ];

        expect(getChildrenVolume(getNestedNodesMap(items), container)).toBe(11);
    });

    it('should return volume of item children with nesting', () => {
        const container = {
            id: '4',
            description: 'container test',
            volume: 100,
            isContainer: true,
        };
        const items: Item[] = [
            {
                id: '1',
                description: 'test 1',
                volume: 1,
                parentId: '4',
            },
            {
                id: '2',
                description: 'test 2',
                isContainer: true,
                volume: 100,
                parentId: '4',
            },
            {
                id: '3',
                description: 'test 3',
                volume: 10,
                parentId: '4',
            },
            {
                id: '4',
                description: 'test 4',
                volume: 10,
                parentId: '2',
            },
            container,
        ];

        expect(getChildrenVolume(getNestedNodesMap(items), container)).toBe(21);
    });
});