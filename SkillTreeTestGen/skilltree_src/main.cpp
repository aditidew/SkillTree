#include "SkillTree.h"
#include <iostream>

int main() {
    SkillTree tree("Root");
    tree.addSkill("Root", "Math");
    tree.addSkill("Math", "Algebra");
    tree.addSkill("Root", "Science");

    std::cout << "Has Math: " << tree.hasSkill("Math") << std::endl;
    std::cout << "Has Biology: " << tree.hasSkill("Biology") << std::endl;

    return 0;
}
