import { mount } from '@vue/test-utils';
import vTodos from '../../src/components/v-todos.vue';

const wrapper = mount(vTodos);
let inputField;
beforeEach(() => {
  inputField = wrapper.find('.v-todos-content__input');
  inputField.element.value = 'New Todo';
  inputField.trigger('input');
});

describe('vTodos', () => {
  test('if a user is not logged in, do not show the logout button', () => {
    const wrapper = mount(vTodos);
    const textTitle = wrapper.find('h1');
    const input = wrapper.find('input');
    const item = wrapper.find('.v-todos-content__list');
    expect(item.is('div')).toBe(true);
    expect(textTitle.text()).toBe('todos');
    expect(input.is('input')).toBe(true);
    expect(wrapper.find('.v-todos-content__input').element.placeholder)
      .toBe('What needs to be done?');
  });
  test('should set correct default data', () => {
    const initialData = vTodos.data();
    expect(initialData.task).toBe('');
    expect(initialData.tasksList).toEqual([]);
  });
  test('added new tasks in field', () => {
    inputField.trigger('keyup.enter');
    expect(wrapper.vm.tasksList).toEqual(['New Todo']);
  });
  test('check removing of item', () => {
    const removeIcon = wrapper.find('.destroy');
    expect(removeIcon.is('span')).toBe(true);
    removeIcon.trigger('click');
    expect(wrapper.vm.tasksList).toEqual([]);
  });
});
