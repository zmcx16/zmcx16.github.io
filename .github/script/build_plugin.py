import os
import pathlib


def html_2_str(plugin_path, html_name):

    html_data = ''
    with open(os.path.join(plugin_path, html_name), 'r', encoding='utf-8') as f:
        for line in f.readlines():
            html_data += '\'' + line.replace('\\', '\\\\').replace('\'', '\\\'').replace('\n', '') + '\' +\n'

    last_plus_index = html_data.rfind("+")

    return html_data[:last_plus_index] + ';' + html_data[last_plus_index + 1:]


def build_plugin_js(js_path, js_name, html_data):

    tgt_path = os.path.join(js_path, js_name)

    with open(tgt_path, 'r', encoding='utf-8') as f:
        js_data = f.read()
        end_pos = js_data.find('document.getElementById')
        output_data = 'var myvar = \n' + html_data + '\n' + js_data[end_pos:]

    with open(tgt_path, 'w', encoding='utf-8') as f:
        f.write(output_data)


if __name__ == "__main__":

    script_path = pathlib.Path(__file__).parent.resolve()
    plugin_folder_path = script_path / '..' / 'plugin-html'
    js_folder_path = script_path / '..' / '..' / 'js'

    (_, _, plugin_name_list) = next(os.walk(plugin_folder_path))
    for name in plugin_name_list:
        html_output = html_2_str(plugin_folder_path, name)
        build_plugin_js(js_folder_path, name.replace('.html', '.js'), html_output)
