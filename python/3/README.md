# Python's Inner Working
- python chai.py
{chai.py} -> bytecode (mostly hidden) -> python vm

# Steps
1. Compile to ByteCode
- ByteCode: lowlevel & Platform Independent
- Byte Code runs faster :
    .pyc -> compiled python (frozen binarics)

-- pycache --
Source Change and Python Version
- hello_chai.cpython-312.pyc
- Works only for imported Alias
- Not for top level files

# Python Virtual Machine ( PVM )
- Code loop to iterate Byte Code
- Run Time Engine
- Also known as python interpreter

Byte Code is not machine code
- Python specific Interpretation
- cpython { standard implementation }, jpython, Iron python, Stackless, PyPy